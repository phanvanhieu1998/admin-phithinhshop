<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: [
          "1",
		  "2",
		  "3",
		  "4",
		  "5",
		  "6",
		  "7",
		  "8",
		  "9",
		  "10",
		  "11",
		  "12"
       
        ],
        datasets: [
          {
            label: "Đơn mới",
            data: [2, 10, 5, 9, 0, 6, 20],
            backgroundColor: "transparent",
            borderColor: "rgb(241, 180, 76)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          },
		         {
            label: "Đang giao",
            data: [2, 4, 5, 6, 0, 6, 10],
            backgroundColor: "transparent",
            borderColor: "rgb(85, 110, 230)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          },
		         {
            label: "Bị hủy",
            data: [1, 40, 6, 10, 20, 3, 5],
            backgroundColor: "transparent",
            borderColor: "rgb(244, 106, 106)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          },
		         {
            label: "Thành công",
            data: [5, 12, 5, 9, 10, 7, 4],
            backgroundColor: "transparent",
            borderColor: "rgb(52, 195, 143)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "My Data"
        }
      }
    );
  }
};
</script>