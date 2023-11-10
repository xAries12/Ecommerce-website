package com.dragomirgdaniel.licenta.admin_logs;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admins")
public class AdminLogsController {
    private final AdminLogsService adminLogsService;

    public AdminLogsController(AdminLogsService adminLogsService) {
        this.adminLogsService = adminLogsService;
    }
    @GetMapping("/logs")
    public List<AdminLogs> findAll() {
        return adminLogsService.findAll();
    }
    @PostMapping("/logs")
    public <S extends AdminLogs> S save(@RequestBody S entity) {
        return adminLogsService.save(entity);
    }
    @DeleteMapping("/logs/{idAdminLogs}")
    public void deleteById(@PathVariable Integer idAdminLogs) {
        adminLogsService.deleteById(idAdminLogs);
    }
    @GetMapping(("/{idc}/logs"))
    public List<AdminLogs> findByIdc(@PathVariable int idc) {
        return adminLogsService.findByIdc(idc);
    }
}
