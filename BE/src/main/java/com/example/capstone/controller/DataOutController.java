package com.example.capstone.controller;


import com.example.capstone.service.dataout.SoilLogService;
import com.example.capstone.service.dataout.TemperatureLogService;
import lombok.Getter;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.capstone.service.dataout.HumidityLogService;

import java.util.ArrayList;

@RestController
@RequestMapping("/dataout")
@Getter
public class DataOutController {
    private final HumidityLogService humidityLogService;
    private final TemperatureLogService temperatureLogService;
    private final SoilLogService soilLogService;

    public DataOutController(HumidityLogService humidityLogService, TemperatureLogService temperatureLogService, SoilLogService soilLogService) {
        this.humidityLogService = humidityLogService;
        this.temperatureLogService = temperatureLogService;
        this.soilLogService = soilLogService;
    }
    @GetMapping("/humidity")
    public ArrayList<DataItem> getHumidity(@RequestParam int deviceId){
        ArrayList<DataItem> data = humidityLogService.LogEntityToRealTimeData(deviceId);
        return data;
    }

    @GetMapping("/temperature")
    public ArrayList<DataItem> getTemperature(@RequestParam int deviceId){
        ArrayList<DataItem> data = temperatureLogService.LogEntityToRealTimeData(deviceId);
        return data;
    }

    @GetMapping("/soil")
    public ArrayList<DataItem> getSun(@RequestParam int deviceId){
        ArrayList<DataItem> data = soilLogService.LogEntityToRealTimeData(deviceId);
        return data;
    }
}

