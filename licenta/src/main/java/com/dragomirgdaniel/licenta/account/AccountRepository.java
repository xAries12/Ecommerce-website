package com.dragomirgdaniel.licenta.account;

import com.dragomirgdaniel.licenta.account.Account;
import com.dragomirgdaniel.licenta.address.Address;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account,Integer> {

    public Optional<Account> findByEmail(String email);
}
