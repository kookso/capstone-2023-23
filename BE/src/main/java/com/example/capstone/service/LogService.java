package com.example.capstone.service;

import com.example.capstone.entity.LogEntity;
import com.example.capstone.repository.LogRepository;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.ArrayList;


@Service
@Setter
public class LogService {
    private final LogRepository logRepository;
    //LogDataOutService
    LogService(LogRepository l){this.logRepository = l;}


    //device id로 필요한 로그를 전부 불러옴.
    public ArrayList<LogEntity> ans(int deviceid){
        ArrayList<LogEntity> a = logRepository.findAllByDeviceId(deviceid);
        System.out.println(a.toString());
        return a;
    }
}