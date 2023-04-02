package com.example.capstone.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "log")
@Getter
@ToString
public class LogEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int log_id;
    //    @ManyToOne(fetch = FetchType.LAZY)
    @Column(name = "device_id")
    private int deviceId;

    @Column(nullable = false)
    private double humidity;

    @Column(nullable = false)
    private double temperature;

    @Column(nullable = false)
    private double sunlight;

    @Column(nullable = false)
    private LocalDateTime logTime;
    @Column
    private int id;


    public LogEntity(int deviceId, int humidity, int temperature, int sunlight,int log_id) {
        this.deviceId = deviceId;
        this.humidity = humidity;
        this.temperature = temperature;
        this.sunlight = sunlight;
        this.log_id = log_id;
    }

    public LogEntity() {

    }
}
