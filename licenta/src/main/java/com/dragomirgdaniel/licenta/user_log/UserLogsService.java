package com.dragomirgdaniel.licenta.user_log;

import com.dragomirgdaniel.licenta.account.AccountRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserLogsService {
    private final UserLogsRepository userLogsRepository;

    public UserLogsService(UserLogsRepository userLogsRepository, AccountRepository accountRepository) {
        this.userLogsRepository = userLogsRepository;
    }

    public List<UserLogs> findAll() {
        return userLogsRepository.findAll();
    }

    public <S extends UserLogs> S save(S entity) {
        return userLogsRepository.save(entity);
    }

    public List<UserLogs> findByIdc(int idc) {
        return userLogsRepository.findByIdc(idc);
    }

    public void deleteById(Integer idUserLogs) {
        userLogsRepository.deleteById(idUserLogs);
    }
}
