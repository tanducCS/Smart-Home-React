const [humiditys, setHumiditys] = useState([]);
  const [data,setData] = useState({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'humidity',
            data: [1,2,3,4,5,6,7],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      });
  const fetchhumiditys = async () => {
    try {
      const response = await axios.get('https://smart-home-react.onrender.com/humidity/perday');
      const humiditys = response.data;
      setHumiditys(humiditys);
      // Xử lý dữ liệu nhiệt độ tại đây
    } catch (error) {
      console.error(error);
      // Xử lý lỗi tại đây
    }
    };
  useEffect(() => {
    fetchhumiditys();
  }, []);
  
  useEffect(() => {
    if (humiditys.length > 0) {
      // Xử lý dữ liệu nhiệt độ
      const weeklyhumiditys = new Array(7).fill(0);

      humiditys.forEach((humidity) => {
        const date = new Date(humidity._id);
        const dayOfWeek = date.getDay(); // Lấy ngày trong tuần (0: Chủ nhật, 1-6: Thứ 2-Thứ 7)
        weeklyhumiditys[dayOfWeek] = humidity.averagehumidity;
      });
      
      const newData = {
        labels: ['Sun', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Mon'],
        datasets: [
          {
            label: 'humidity',
            data: weeklyhumiditys,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
          },
        ],
      };
      console.log(newData)
      setData(newData);
    }
  }, [humiditys]);