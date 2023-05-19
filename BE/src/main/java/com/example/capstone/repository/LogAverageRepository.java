package com.example.capstone.repository;

import com.example.capstone.entity.LogAverageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;

public interface LogAverageRepository extends JpaRepository<LogAverageEntity,Long> {

}
