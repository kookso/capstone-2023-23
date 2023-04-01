package com.example.capstone.controller;

import com.example.capstone.service.datain.ImageInService;
import net.bytebuddy.asm.Advice;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/datain")
public class DataInController {
    public final ImageInService imageInService;

    public DataInController(ImageInService ii){
        this.imageInService = ii;
    }

    // 1. 이미지를 받는다
    // 2. 폴더에 저장한다
    // 3. 저장되는 이미지의 파일명은 날짜+시간+deviceId
    // 4. db에 저장된 파일의 path를 저장한다.

        @PostMapping("/image")
        public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file ) {

            String message = imageInService.ImageSave(file, 123124);

            if (message == "Fail"){
                return new ResponseEntity<>("Failed to upload image", HttpStatus.INTERNAL_SERVER_ERROR);
            }
            else{
                return new ResponseEntity<>("Image uploaded successfully", HttpStatus.OK);
            }
        }
    }
