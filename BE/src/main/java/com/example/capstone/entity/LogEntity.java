package com.example.capstone.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "log")
@Getter
@ToString
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LogEntity {

    @Column(nullable = false)
    private int deviceId;

    @Column(nullable = false)
    private double humidity;

    @Column(nullable = false)
    private double temperature;

    @Column(nullable = false)
    private double SoilMoisture;

    @Id
    @Column(nullable = false)
    @CreationTimestamp
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime logTime;
}
