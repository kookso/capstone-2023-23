package com.example.capstone.entity;

import com.example.capstone.dto.LogDto;
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

    public LogDto EntityToDto(){
        int hour = this.getLogTime().getHour();

        LogDto rtn = new LogDto(this.getHumidity(),this.getTemperature(),this.getSoilMoisture(),hour);

        return rtn;
    }

}
