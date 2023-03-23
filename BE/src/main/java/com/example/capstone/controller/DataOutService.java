package com.example.capstone.controller;

import com.example.capstone.entity.LogEntity;
import com.example.capstone.service.LogService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;


@RestController
@RequestMapping("/data")
public class DataOutService {
    private final LogService logService;

    public DataOutService(LogService logService) {
        this.logService = logService;
    }


    //당연히 로그인 되어있다는 가정하에
    @GetMapping("current")
    public ArrayList<LogEntity> LoadCurruntLog(@RequestParam int deviceId){
        //최종 데이터 형식
        /*
        "data" : [
            {
                id: "temp"
                data: [
                {
                    x : "01" //시간
                    y : "25" //기온(데이터)
                 }, .....
                ]
            }

            {
                id: "humidity"
                data: [
                    {

                    }
                ]


            }

        ]

        */

         ArrayList<LogEntity> data = logService.ans(deviceId);
         return data;
    }
}
