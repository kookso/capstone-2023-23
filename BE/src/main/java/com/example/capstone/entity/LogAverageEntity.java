package com.example.capstone.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
@Entity(name = "LogAverage")
public class LogAverageEntity {

    @Id
    @CreationTimestamp
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDateTime logTime;

    @Column(nullable = false)
    private int deviceId;

    @Column(nullable = false)
    private double humidity;

    @Column(nullable = false)
    private double temperature;

    @Column(nullable = false)
    private double soilMoisture;

}
