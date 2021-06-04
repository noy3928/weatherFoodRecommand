 // 서울 lat: 37.5833, lon: 127



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

                    return {
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
                    day1 = [{'id': response['daily'][1]['weather'][0]['id']}, {'temp': response['daily'][1]['temp']['day'] - 273}]
                    day2 = [{'id': response['daily'][2]['weather'][0]['id']}, {'temp': response['daily'][2]['temp']['day'] - 273}]
                    day3 = [{'id': response['daily'][3]['weather'][0]['id']}, {'temp': response['daily'][3]['temp']['day'] - 273}]
                    day4 = [{'id': response['daily'][4]['weather'][0]['id']}, {'temp': response['daily'][4]['temp']['day'] - 273}]
                    day5 = [{'id': response['daily'][5]['weather'][0]['id']}, {'temp': response['daily'][5]['temp']['day'] - 273}]
                    day6 = [{'id': response['daily'][6]['weather'][0]['id']}, {'temp': response['daily'][6]['temp']['day'] - 273}]
                    day7 = [{'id': response['daily'][7]['weather'][0]['id']}, {'temp': response['daily'][7]['temp']['day'] - 273}]


                    console.log(day1, day2, day3, day4, day5, day6, day7)
                    return [ {'+1': day1},
                                        {'+2': day2},
                                        {'+3': day3},
                                        {'+4': day4},
                                        {'+5': day5},
                                        {'+6': day6},
                                        {'+7': day7}];

                }

            })
        }