package com.dragomirgdaniel.licenta.manager_logs;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/managers")
public class ManagerLogsController {
    private final ManagerLogsService managerLogsService;

    public ManagerLogsController(ManagerLogsService managerLogsService) {
        this.managerLogsService = managerLogsService;
    }
    @GetMapping("/logs")
    public List<ManagerLogs> findAll() {
        return managerLogsService.findAll();
    }
    @PostMapping("/logs")
    public <S extends ManagerLogs> S save(@RequestBody S entity) {
        return managerLogsService.save(entity);
    }
    @DeleteMapping("/logs/{idManagerLogs}")
    public void deleteById(@PathVariable Integer idManagerLogs) {
        managerLogsService.deleteById(idManagerLogs);
    }
    @GetMapping(("/{idc}/logs"))
    public List<ManagerLogs> findByIdc(@PathVariable int idc) {
        return managerLogsService.findByIdc(idc);
    }
}
