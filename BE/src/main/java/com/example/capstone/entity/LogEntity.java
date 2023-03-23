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
    private int id;

//    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "device_id")
    private int deviceId;

    @Column(nullable = false)
    private int humidity;

    @Column(nullable = false)
    private int temperature;

    @Column(nullable = false)
    private int sunlight;

    @Column(nullable = false)
    private LocalDateTime logTime;

    // 생성자, getter, setter, toString 등 생략

    public LogEntity(int deviceId, int humidity, int temperature, int sunlight) {
        this.deviceId = deviceId;
        this.humidity = humidity;
        this.temperature = temperature;
        this.sunlight = sunlight;
    }

    public LogEntity() {

    }
}
