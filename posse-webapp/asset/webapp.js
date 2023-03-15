  window.onload = function () {
  let context = document.querySelector('#chart').getContext('2d')
  new Chart(context, {
    type: 'bar',
    data: {
    labels: ['','2','','4','','6','','8','','10','','12','','14','','16','','18','','20','','22','','24','','26','','28','','30',''],
    datasets: [{
      label: "どれえもん",
      data: [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8,4,4,4,4,4,8,4,4,4,3],
      backgroundColor:['#395f85']
    }],
    },
    Options: {
    responsive: false,
    }
  })

  // 以下lang
  let context2 = document.querySelector("#lang").getContext('2d')
  new Chart(context2, {
    type: 'doughnut',
    data: {
      labels: ["JavaScript", "CSS", "PHP", "HTML", "Laravel","SQL","SHELL","情報システム基礎知識（その他）"],
      datasets: [{
        backgroundColor: [
        "#395f85",
        "#45a17e",
        "#262d40",
        "#8996ac",
        "#8aaea9",
        "#d2d9e1",
        "#97ae73",
        "#3f8b92",
        "#52556e"
    ],
        data: [42, 18, 10, 10, 10, 10, 10, 10]
      }]
    },
    options: {
      responsive: false,
        plugins: {
        legend: {
            position: 'bottom',
            // tooltips: {
            //   textStyle: {bold:"false",fontSize:12},
            // },
            // pieSliceText:"percentage",
            // pieSliceTextStyle:{fontSize:15},
            // pieHOle:0.4,
            // backgroundColor:"transparent",
            // chartArea:{width:"90%",height:"100%"}
        }
      },
      layout: {
        padding: {
            bottom: 16
        }
    }
    }
  });

  // 以下cont
  let context3 = document.querySelector("#cont").getContext('2d')
  new Chart(context3, {
    type: 'doughnut',
    data: {
      labels: ["ドットインストール", "N予備校", "POSSE課題",],
      datasets: [{
        backgroundColor: [
        "#395f85",
        "#45a17e",
        "#262d40",
        "#8996ac"
    ],
        data: [42, 33, 25,]
      }]
    },
    options: {
      responsive: false,
      plugins: {
        legend: {
            position: 'bottom',
        }
      },
      layout: {
      padding: {
          bottom: 16
      }
  }
    }
  });
  }



  var access = $.cookie('access')
    if(!access){
      flag = true;
      $.cookie('access', false);
    }else{
      flag = false
    }

    //モーダル表示
    $(".modal-open").modaal({
    start_open:flag, // ページロード時に表示するか
    overlay_close:true,//モーダル背景クリック時に閉じるか
    });

  // 以下ローディング画面
  document.querySelector('.btn').addEventListener('click', () => {
    const loading = document.querySelector( '.loading' );
    loading.style.display = 'block'

    const modal = document.querySelector('.modal');
    modal.style.display = 'none'

    setTimeout(() => {
      loading.style.display = 'none'
      const done = document.querySelector('.done');
      done.style.display = 'block'
    }, 3000);
  })



