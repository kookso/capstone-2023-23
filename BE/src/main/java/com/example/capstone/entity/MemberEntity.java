package com.example.capstone.entity;


import lombok.*;
import org.springframework.context.annotation.Primary;

import javax.persistence.*;

@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "member")
public class MemberEntity extends BaseTimeEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String email;
    @Column
    private String pw;

}