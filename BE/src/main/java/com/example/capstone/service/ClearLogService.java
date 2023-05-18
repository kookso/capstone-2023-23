package com.example.capstone.service;

import com.example.capstone.repository.LogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class ClearLogService {

    private final LogRepository logRepository;

    @Autowired
    public ClearLogService(LogRepository logRepository) {
        this.logRepository = logRepository;
    }

    @Scheduled(cron = "50 59 23 * * ?")
    @Transactional
    public void deleteAllRows() {
        logRepository.deleteAll();
    }
}
