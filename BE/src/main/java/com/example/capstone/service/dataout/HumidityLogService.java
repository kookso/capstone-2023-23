package com.example.capstone.service.dataout;

import com.example.capstone.controller.DataItem;
import com.example.capstone.controller.realtimedata;
import com.example.capstone.entity.LogEntity;
import com.example.capstone.repository.LogRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class HumidityLogService {
    private final LogRepository logRepository;
    //LogDataOutService
    public HumidityLogService (LogRepository l){this.logRepository = l;}


    public ArrayList<LogEntity> LogEntityToRealTimeData(int deviceid){
        ArrayList<LogEntity> a = logRepository.findAllById(deviceid);
        realtimedata ans = new realtimedata();


        for(int i=0; i<a.size();i++){
            ans.AddData(new DataItem(a.get(i).getLogTime().toString().indexOf(2),a.get(i).getHumidity()));
        }
        System.out.println(a.toString());
        return a;
    }

}
