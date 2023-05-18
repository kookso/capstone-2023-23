package com.example.capstone.service.dataout;

import com.example.capstone.controller.DataItem;
import com.example.capstone.controller.RealtimeData;
import com.example.capstone.dto.LogDto;
import com.example.capstone.entity.LogEntity;
import com.example.capstone.repository.LogRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class TotalLogService {

    private final LogRepository logRepository;
    //LogDataOutService
    public TotalLogService (LogRepository l){this.logRepository = l;}


    public ArrayList<LogDto> LogEntityToRealTimeData(int deviceid){
        ArrayList<LogEntity> a = logRepository.findAllByDeviceId(deviceid);
        ArrayList<LogDto> ans = new ArrayList<>();

        for(int i=0; i<a.size();i++){
            ans.add(a.get(i).EntityToDto());
        }
        return ans;
    }
}
