package com.example.capstone.controller;


import com.example.capstone.dto.LogDto;
import com.example.capstone.service.dataout.SoilLogService;
import com.example.capstone.service.dataout.TemperatureLogService;
import com.example.capstone.service.dataout.TotalLogService;
import lombok.Getter;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.capstone.service.dataout.HumidityLogService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Base64;

@RestController
@RequestMapping("/dataout")
@Getter
public class DataOutController {
    private final HumidityLogService humidityLogService;
    private final TemperatureLogService temperatureLogService;
    private final SoilLogService soilLogService;
    private final TotalLogService totalLogService;

    public DataOutController(HumidityLogService humidityLogService, TemperatureLogService temperatureLogService, SoilLogService soilLogService,TotalLogService totalLogService) {
        this.humidityLogService = humidityLogService;
        this.temperatureLogService = temperatureLogService;
        this.soilLogService = soilLogService;
        this.totalLogService = totalLogService;
    }

    @GetMapping(value = "/image", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<byte[]> getImage(@RequestParam("deviceId") int deviceId) throws IOException {
        Path imgPath = Paths.get("/home/ubuntu/Image/" + deviceId + ".jpg");
        byte[] bytes = Files.readAllBytes(imgPath);

        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(bytes);
    }



//"/home/ubuntu/Image/"
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
    public ArrayList<DataItem> getSoil(@RequestParam int deviceId){
        ArrayList<DataItem> data = soilLogService.LogEntityToRealTimeData(deviceId);
        return data;
    }
    @GetMapping("/total")
    public ArrayList<LogDto> getTotal(@RequestParam int deviceId){
        ArrayList<LogDto> data = totalLogService.LogEntityToRealTimeData(deviceId);
        return data;
    }
}

