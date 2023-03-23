package com.example.capstone.service;

import com.example.capstone.entity.MemberEntity;
import com.example.capstone.repository.MemberRepository;
import org.springframework.stereotype.Service;

@Service
public class MemberAuthenticationCheckService {

    private final MemberRepository memberRepository;

    MemberAuthenticationCheckService(MemberRepository m){
        this.memberRepository = m;
    }

    public boolean CheckAuthentication(String email , String pw) {
        MemberEntity member = memberRepository.findByEmailAndPw(email,pw); // email을 가지고 db에 등록되었는지 확인. 비밀번호도 추가로 확인해야함.
        System.out.println(member.toString());
        System.out.println(member.getEmail());
        System.out.println(member.getPw());
        if (member.getEmail().equals(email) && member.getPw().equals(pw)){
            return true;
        } else{
            return false;
        }
    }

}
