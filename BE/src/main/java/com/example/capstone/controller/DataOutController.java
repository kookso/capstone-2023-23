package com.example.capstone.controller;

import com.example.capstone.entity.LogEntity;
import com.example.capstone.service.LogService;
import com.example.capstone.service.dataout.HumidityLogService;
import com.example.capstone.service.dataout.SunLogService;
import com.example.capstone.service.dataout.TemperatureLogService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/dataout")
public class DataOutController {
    private final HumidityLogService humidityLogService;
    private final TemperatureLogService temperatureLogService;
    private final  SunLogService sunLogService;

    public DataOutController(HumidityLogService humidityLogService, TemperatureLogService temperatureLogService, SunLogService sunLogService) {
        this.humidityLogService = humidityLogService;
        this.temperatureLogService = temperatureLogService;
        this.sunLogService = sunLogService;
    }
    @GetMapping("/humidity")
    public ArrayList<LogEntity> getHumidity(@RequestParam int deviceId){
        ArrayList<LogEntity> data = humidityLogService.LogEntityToRealTimeData(deviceId);
        return data;
    }

    @GetMapping("/temperature")
    public ArrayList<LogEntity> getTemperature(@RequestParam int deviceId){
        ArrayList<LogEntity> data = temperatureLogService.ans(deviceId);
        return data;
    }

    @GetMapping("/sun")
    public ArrayList<LogEntity> getSun(@RequestParam int deviceId){
        ArrayList<LogEntity> data = sunLogService.ans(deviceId);
        return data;
    }
}

