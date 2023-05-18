from event_manager import *
from aiot_lcd1602 import LCD1602
import time
from yolobit import *
button_a.on_pressed = None
button_b.on_pressed = None
button_a.on_pressed_ab = button_b.on_pressed_ab = -1
from mqtt import *
from machine import RTC
import ntptime
from aiot_hcsr04 import HCSR04
from machine import Pin, SoftI2C
from aiot_dht20 import DHT20
from aiot_rgbled import RGBLed
from aiot_ir_receiver import *
import music

event_manager.reset()

aiot_lcd1602 = LCD1602()

def on_event_timer_callback_A_G_V_b_E():
  global th_C3_B4ng_tin, temperature, humidity, status, pass2, light, admin
  aiot_lcd1602.move_to(13, 1)
  aiot_lcd1602.putstr(':')
  time.sleep_ms(1000)
  aiot_lcd1602.move_to(13, 1)
  aiot_lcd1602.putstr('')
  time.sleep_ms(1000)

event_manager.add_timer_event(2000, on_event_timer_callback_A_G_V_b_E)

def on_event_timer_callback_a_D_U_K_Z():
  global th_C3_B4ng_tin, temperature, humidity, status, pass2, light, admin
  aiot_lcd1602.move_to(0, 1)
  aiot_lcd1602.putstr(('%0*d' % (2, RTC().datetime()[2])))
  aiot_lcd1602.move_to(2, 1)
  aiot_lcd1602.putstr('/')
  aiot_lcd1602.move_to(3, 1)
  aiot_lcd1602.putstr(('%0*d' % (2, RTC().datetime()[1])))
  aiot_lcd1602.move_to(5, 1)
  aiot_lcd1602.putstr('/')
  aiot_lcd1602.move_to(6, 1)
  aiot_lcd1602.putstr(('%0*d' % (2, RTC().datetime()[0])))
  aiot_lcd1602.move_to(10, 1)
  aiot_lcd1602.putstr(' ')
  aiot_lcd1602.move_to(11, 1)
  aiot_lcd1602.putstr(('%0*d' % (2, RTC().datetime()[4])))
  aiot_lcd1602.move_to(14, 1)
  aiot_lcd1602.putstr(('%0*d' % (2, RTC().datetime()[5])))

event_manager.add_timer_event(30000, on_event_timer_callback_a_D_U_K_Z)

aiot_dht20 = DHT20(SoftI2C(scl=Pin(22), sda=Pin(21)))

def on_event_timer_callback_O_M_e_N_R():
  global th_C3_B4ng_tin, temperature, humidity, status, pass2, light, admin
  aiot_dht20.read_dht20()
  temperature = aiot_dht20.dht20_temperature()
  humidity = aiot_dht20.dht20_humidity()
  light = round(translate((pin2.read_analog()), 0, 4095, 0, 100))
  aiot_lcd1602.move_to(0, 0)
  aiot_lcd1602.putstr(temperature)
  aiot_lcd1602.move_to(4, 0)
  aiot_lcd1602.putstr('*C')
  aiot_lcd1602.move_to(6, 0)
  aiot_lcd1602.putstr('  ')
  aiot_lcd1602.move_to(8, 0)
  aiot_lcd1602.putstr(humidity)
  aiot_lcd1602.move_to(10, 0)
  aiot_lcd1602.putstr('%')
  aiot_lcd1602.move_to(11, 0)
  aiot_lcd1602.putstr('  ')
  aiot_lcd1602.move_to(13, 0)
  aiot_lcd1602.putstr(light)
  aiot_lcd1602.move_to(15, 0)
  aiot_lcd1602.putstr('%')
  mqtt.publish('Temperature', temperature)
  mqtt.publish('Humidity', humidity)
  mqtt.publish('Light Intensity', light)

event_manager.add_timer_event(30000, on_event_timer_callback_O_M_e_N_R)

tiny_rgb = RGBLed(pin0.pin, 4)

def on_mqtt_message_receive_callback__ligh_on_off_(th_C3_B4ng_tin):
  global temperature, humidity, status, pass2, light, admin
  if th_C3_B4ng_tin == '1':
    tiny_rgb.show(1, hex_to_rgb('#ff0000'))
    mqtt.publish('screentext', 'LIGHT TURN ON')
  else:
    tiny_rgb.show(1, hex_to_rgb('#000000'))
    mqtt.publish('screentext', 'LIGHT TURN OFF')

def on_mqtt_message_receive_callback__Fan_Speed_(th_C3_B4ng_tin):
  global temperature, humidity, status, pass2, light, admin
  pin10.write_analog(round(translate((int(th_C3_B4ng_tin)), 0, 100, 0, 1023)))
  mqtt.publish('screentext', ('FAN SPEED: ' + str(th_C3_B4ng_tin)))

# Mô tả hàm này...
def _C4_90_C4_83ng_k_C3_AD_k_C3_AAnh():
  global th_C3_B4ng_tin, temperature, humidity, pass2, status, light, admin, aiot_lcd1602, aiot_dht20, aiot_ultrasonic, aiot_ir_rx, tiny_rgb
  mqtt.on_receive_message('ligh_on_off', on_mqtt_message_receive_callback__ligh_on_off_)
  mqtt.on_receive_message('Fan Speed', on_mqtt_message_receive_callback__Fan_Speed_)

def on_event_timer_callback_s_d_y_R_l():
  global th_C3_B4ng_tin, temperature, humidity, status, pass2, light, admin
  if ('%0*d' % (2, RTC().datetime()[4])) == 11:
    mqtt.publish('light_on_off', '0')

event_manager.add_timer_event(500, on_event_timer_callback_s_d_y_R_l)

def on_event_timer_callback_y_E_m_q_R():
  global th_C3_B4ng_tin, temperature, humidity, status, pass2, light, admin
  if aiot_ultrasonic.distance_cm() < 10:
    pin4.servo_write(90)
    time.sleep_ms(2000)
    pin4.servo_write(0)
  else:
    pin4.servo_write(0)

event_manager.add_timer_event(100, on_event_timer_callback_y_E_m_q_R)

def on_event_timer_callback_A_v_g_d_k():
  global th_C3_B4ng_tin, temperature, humidity, status, pass2, light, admin
  if pin14.read_digital()==1:
    display.set_all('#ff0000')
  else:
    display.set_all('#000000')

event_manager.add_timer_event(100, on_event_timer_callback_A_v_g_d_k)

aiot_ir_rx = IR_RX(Pin(pin1.pin, Pin.IN)); aiot_ir_rx.start();

# Mô tả hàm này...
def checkPass():
  global th_C3_B4ng_tin, temperature, humidity, pass2, status, light, admin, aiot_lcd1602, aiot_dht20, aiot_ultrasonic, aiot_ir_rx, tiny_rgb
  if aiot_ir_rx.get_code() == IR_REMOTE_1:
    music.play(['G3:1'], wait=True)
    pass2 = str(pass2) + '1'
  if aiot_ir_rx.get_code() == IR_REMOTE_2:
    music.play(['G3:1'], wait=True)
    pass2 = str(pass2) + '2'
  if aiot_ir_rx.get_code() == IR_REMOTE_3:
    music.play(['G3:1'], wait=True)
    pass2 = str(pass2) + '3'
  if aiot_ir_rx.get_code() == IR_REMOTE_F:
    if pass2 == str(admin) + str(admin):
      admin = ''
      status = 1
      pass2 = ''
    else:
      if pass2 == admin:
        pin4.servo_write(90)
        time.sleep_ms(2000)
        pin4.servo_write(0)
      else:
        pin4.servo_write(0)
      pass2 = ''
  aiot_ir_rx.clear_code()

def on_event_timer_callback_N_r_q_d_j():
  global th_C3_B4ng_tin, temperature, humidity, status, pass2, light, admin
  if status == 0:
    checkPass()

event_manager.add_timer_event(100, on_event_timer_callback_N_r_q_d_j)

if True:
  display.scroll('Yolo Home!')
  mqtt.connect_wifi('Redmi', '0335655631')
  mqtt.connect_broker(server='io.adafruit.com', port=1883, username='nguyenha25012002', password='aio_MEVv184VPv9Sjenti1EM1WKmXU9y')
  ntptime.settime()
  (year, month, mday, week_of_year, hour, minute, second, milisecond) = RTC().datetime()
  RTC().init((year, month, mday, week_of_year, hour+7, minute, second, milisecond))
  aiot_ultrasonic = HCSR04(trigger_pin=pin10.pin, echo_pin=pin13.pin)
  admin = '123'
  pass2 = ''
  status = 0
  aiot_lcd1602.clear()
  _C4_90_C4_83ng_k_C3_AD_k_C3_AAnh()
  display.scroll('OK')

while True:
  event_manager.run()
  mqtt.check_message()
  time.sleep_ms(1000)
