 var curr_weather

        function weather_info(lat, lon) {

            var apiurl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=b0641107a6d807bd0a87e9c615a68c99&units=metric"
            $.ajax({
                type: "GET",
                url: apiurl,
                data: {},
                success: function (response) {
                    let temp = response['main']['temp']
                    let condition = response['weather'][0]['id']

                    console.log('현제기온:', temp, '날씨id:', condition)

                    return curr_weather = {
                        "temp": temp,
                        "condition": condition
                    }
                }
            })
        }

        //        서울 lat: 37.5833,
        // lon: 127


        function weather_7day(lat, lon) {

            var apiurl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=current,minutely,hourly,alerts&appid=62c98c080227e940379a9e1989d33035"
            $.ajax({
                type: "GET",
                url: apiurl,
                data: {},
                success: function (response) {
                    day1 = response['daily'][1]['weather'][0]['id'];
                    day2 = response['daily'][2]['weather'][0]['id'];
                    day3 = response['daily'][3]['weather'][0]['id'];
                    day4 = response['daily'][4]['weather'][0]['id'];
                    day5 = response['daily'][5]['weather'][0]['id'];
                    day6 = response['daily'][6]['weather'][0]['id'];
                    day7 = response['daily'][7]['weather'][0]['id'];
                    temp1 = response['daily'][1]['temp']['day'] - 273;
                    temp2 = response['daily'][2]['temp']['day'] - 273;
                    temp3 = response['daily'][3]['temp']['day'] - 273;
                    temp4 = response['daily'][4]['temp']['day'] - 273;
                    temp5 = response['daily'][5]['temp']['day'] - 273;
                    temp6 = response['daily'][6]['temp']['day'] - 273;
                    temp7 = response['daily'][7]['temp']['day'] - 273;


                    console.log(day1, day2, day3, day4, day5, day6, day7)
                    return {
                        'id': [day1, day2, day3, day4, day5, day6, day7],
                        'temp': [temp1, temp2, temp3, temp4, temp5, temp6, temp7]
                    }
                }
            })}