package com.dragomirgdaniel.licenta.account;

import com.dragomirgdaniel.licenta.address.AddressRepository;
import com.dragomirgdaniel.licenta.auth.AuthenticationRequest;
import com.dragomirgdaniel.licenta.config.JwtService;
import com.dragomirgdaniel.licenta.transaction.Transaction;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.method.P;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountService {

    private final AccountRepository accountRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    public AccountService(AccountRepository accountRepository, JwtService jwtService, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager) {
        this.accountRepository = accountRepository;
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }


    public List<Account> findAll() {
        return accountRepository.findAll();
    }

    public <S extends Account> S save(S entity) {
        return accountRepository.save(entity);
    }

    public Account findById(Integer idc) {
        Account account = accountRepository.findById(idc).get();
        return account;
    }

    public Optional<Account> findByEmail(String email) {
        return accountRepository.findByEmail(email);
    }

    public void deleteById(Integer idc) {
        accountRepository.deleteById(idc);
    }

    public void update(Account entity, int idc) {
        Account account = accountRepository.findById(idc).orElseThrow();
            if(entity.getPassword()!=null) account.setPassword(passwordEncoder.encode(entity.getPassword())); else{
                System.out.println(entity.getPassword()+"Ceva");
            }
            account.setFirstname(entity.getFirstname());
            account.setLastname(entity.getLastname());
            account.setRole(entity.getRole());
            account.setPhoneNumber(entity.getPhoneNumber());
        accountRepository.save(account);

    }
    public void updateRole(Integer idAccount, String role){

        Optional<Account> account = accountRepository.findById(idAccount);
        Optional<Account> account1 = account.map(account2 -> {
            account2.setRole(Account.Role.valueOf(role));
            return account2;
        });
        accountRepository.save(account1.get());
    }

}
