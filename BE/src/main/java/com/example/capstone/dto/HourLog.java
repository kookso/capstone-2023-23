package com.example.capstone.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

//dto 형식
/*

 */
public class HourLog{
    private LocalDateTime datetime;
    private String lux;
    private String moist;
    private String temp;



}