package com.example.capstone.service;

import com.example.capstone.entity.DeviceEntity;
import com.example.capstone.entity.LogAverageEntity;
import com.example.capstone.entity.LogEntity;
import com.example.capstone.repository.DeviceRepository;
import com.example.capstone.repository.LogAverageRepository;
import com.example.capstone.repository.LogRepository;
import lombok.Setter;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import javax.persistence.Column;
import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;


@Service
@Setter
public class LogService {
    private final LogRepository logRepository;
    private final DeviceRepository deviceRepository;
    private final LogAverageRepository logAverageRepository;
    //LogDataOutService
    LogService(LogRepository l,DeviceRepository d, LogAverageRepository la){this.logRepository = l; this.deviceRepository = d; this.logAverageRepository=la;}


    //device id로 필요한 로그를 전부 불러옴.
    public ArrayList<LogEntity> ans(int deviceid){
        ArrayList<LogEntity> a = logRepository.findAllByDeviceId(deviceid);
        System.out.println(a.toString());
        return a;
    }

    @Scheduled(cron = "00 59 23 * * ?")
    @Transactional
    public void deleteAllRows() {

        //일일로그 삭제
        logRepository.deleteAll();
    }

    // 로그 평균값 저장하는 매소드
    @Scheduled(cron = "00 11 3 * * ?")
    @Transactional
    public void SaveAve(){
        //모든 device들의 Log를 불러와서 평균값 낸 뒤, 그 값들을 이용해서 LogAverageEntity를 생성, 저장함.

        //모든 device Id 불러오기
        ArrayList<Integer> deviceIdList = deviceRepository.findAllDeviceId();
        //device Id를 이용해서 Log데이터 불러옴. 각 컬럼별로 평균값 냄
        if(deviceIdList.size() == 0){
            return;
        }
        for(int i=0; i<deviceIdList.size();i++) {
            double humidity_ave=0;
            double temperature_ave=0;
            double soilMoisture_ave=0;
            ArrayList<LogEntity> logList = logRepository.findAllByDeviceId(deviceIdList.get(i));
            if(logList.size() == 0){
                continue;
            }
            for (int j = 0; j < logList.size(); j++) {
                humidity_ave += logList.get(j).getHumidity();
                temperature_ave += logList.get(j).getTemperature();
                soilMoisture_ave += logList.get(j).getSoilMoisture();
            }
//
            humidity_ave /= logList.size();
            temperature_ave /= logList.size();
            soilMoisture_ave /= logList.size();

//            System.out.println(humidity_ave);
//            System.out.println(temperature_ave);
//            System.out.println(soilMoisture_ave);

            LogAverageEntity e = new LogAverageEntity();
            e.setHumidity(humidity_ave);
            e.setTemperature(temperature_ave);
            e.setSoilMoisture(soilMoisture_ave);
            e.setDeviceId(deviceIdList.get(i));
            e.setLogTime(LocalDateTime.now());

            // 새로운 LogAverageEntity를 생성 , 저장
            logAverageRepository.save(e);
        }
    }
}