package com.dragomirgdaniel.licenta.admin_logs;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdminLogsRepository extends JpaRepository<AdminLogs,Integer> {
    public List<AdminLogs> findByIdc(int idc);
}
