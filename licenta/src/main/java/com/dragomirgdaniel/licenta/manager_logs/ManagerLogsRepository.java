package com.dragomirgdaniel.licenta.manager_logs;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ManagerLogsRepository extends JpaRepository<ManagerLogs,Integer> {
    public List<ManagerLogs> findByIdc(int idc);
}
