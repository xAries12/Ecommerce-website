package com.dragomirgdaniel.licenta.keyboard;

import com.dragomirgdaniel.licenta.account.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface KeyboardRepository extends JpaRepository<Keyboard,Integer> {
}
