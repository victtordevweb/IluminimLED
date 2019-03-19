class Utils {

    static cronometro(seletor, startTime, endTime){
        $(`${seletor}`).yuukCountDown({
          starttime: `${startTime}`,
          endtime: `${endTime}`
        }); 
      }

}