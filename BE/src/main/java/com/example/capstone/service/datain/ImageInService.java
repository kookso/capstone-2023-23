package com.example.capstone.service.datain;

import com.example.capstone.entity.ImageStorageEntity;
import com.example.capstone.repository.ImageRepository;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;

@Service
@Getter
@Setter
@AllArgsConstructor
public class ImageInService {
    private ImageRepository imageRepository;

    public String ImageSave(MultipartFile file, int deviceID){
        LocalDateTime dataTime = LocalDateTime.now();
        int device_ID = deviceID;
        String fileName = file.getOriginalFilename();
        String extension = fileName.substring(fileName.lastIndexOf(".") + 1);

        String path = "/home/ubuntu/Image/"+ dataTime + "ID?" + device_ID + "." +extension;
///home/ubuntu/Image/
//        /Users/junghyun/Desktop/CapstoneProject/Capstone/src/main/resources/Image/
        try {
            File dest = new File(path);
            file.transferTo(dest);
            imageRepository.save(new ImageStorageEntity(path , device_ID));
            return "Image save Success";

        } catch (IOException e) {
            e.printStackTrace();
            return "Image save Fail";
        }
    }
}

