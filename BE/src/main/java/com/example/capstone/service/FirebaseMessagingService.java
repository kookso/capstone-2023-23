package com.example.capstone.service;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;

public class FirebaseMessagingService {

    public String sendNotification() throws FirebaseMessagingException {
        // FCM 인스턴스를 얻습니다.
        FirebaseMessaging firebaseMessaging = FirebaseMessaging.getInstance();

        // 메시지를 구성합니다.
        Message message = Message.builder()
                .putData("title", "새로운 메시지가 도착했습니다.")
                .putData("body", "푸시 알림을 확인해 보세요!")
                .setToken("<사용자의 FCM 토큰>")
                .build();

        // 메시지를 전송하고 응답 메시지 ID를 반환합니다.
        String response = firebaseMessaging.send(message);
        return response;
    }

}
