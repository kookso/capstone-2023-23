package com.example.capstone.service;

import com.example.capstone.controller.Member;
import com.example.capstone.entity.MemberEntity;
import com.example.capstone.repository.MemberRepository;
import org.springframework.stereotype.Service;

@Service
public class MemberAuthenticationCheckService {

    private final MemberRepository memberRepository;

    MemberAuthenticationCheckService(MemberRepository m){
        this.memberRepository = m;
    }

    public int CheckAuthentication(String email , String pw) {
        MemberEntity member = memberRepository.findByEmailAndPw(email,pw); // email을 가지고 db에 등록되었는지 확인. 비밀번호도 추가로 확인해야함.
        System.out.println(member);
        System.out.println(member==null);
        System.out.println(member.getEmail());
        System.out.println(member.getPw());

        if (member != null){
            return 1;
        } else{
            return 0;
        }
    }
    public Member loadMember(String email, String pw){
        MemberEntity member = memberRepository.findByEmailAndPw(email,pw); // email을 가지고 db에 등록되었는지 확인. 비밀번호도 추가로 확인해야함.
        Member rtn = member.EntityToMember();
        rtn.setId(member.getId());
        return rtn;
    }

}