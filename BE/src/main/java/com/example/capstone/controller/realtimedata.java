package com.example.capstone.controller;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
public class realtimedata {
    private String id;
    private String color;
    private List<DataItem> data;

    public void AddData(DataItem dataItem){
        data.add(dataItem);
    }

}