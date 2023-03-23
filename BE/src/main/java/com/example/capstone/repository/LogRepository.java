package com.example.capstone.repository;

import com.example.capstone.entity.LogEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface LogRepository extends JpaRepository<LogEntity,Long> {


    @Override
    List<LogEntity> findAllById(Iterable<Long> longs);


    ArrayList<LogEntity> findAll();

    ArrayList<LogEntity> findAllById(int deviceid);
}
