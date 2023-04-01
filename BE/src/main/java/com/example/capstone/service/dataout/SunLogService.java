package com.example.capstone.service.dataout;

import com.example.capstone.entity.LogEntity;
import com.example.capstone.repository.LogRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class SunLogService {
    private final LogRepository logRepository;
    //LogDataOutService
    SunLogService (LogRepository l){this.logRepository = l;}

    public ArrayList<LogEntity> ans(int deviceid){
        ArrayList<LogEntity> a = logRepository.findAllById(deviceid);
        System.out.println(a.toString());
        return a;
    }
}
