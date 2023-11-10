package com.dragomirgdaniel.licenta.user_log;

import com.dragomirgdaniel.licenta.address.Address;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserLogsRepository extends JpaRepository<UserLogs,Integer> {
    public List<UserLogs> findByIdc(int idc);
}
