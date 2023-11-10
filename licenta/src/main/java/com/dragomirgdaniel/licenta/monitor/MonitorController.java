package com.dragomirgdaniel.licenta.monitor;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/products/monitors")
@RestController
public class MonitorController {

    private final MonitorService monitorService;

    public MonitorController(MonitorService monitorService) {
        this.monitorService = monitorService;
    }
    @GetMapping
    public List<Monitor> findAll() {
        return monitorService.findAll();
    }
    @PostMapping
    public <S extends Monitor> S save(@RequestBody S entity) {
        return monitorService.save(entity);
    }
    @PutMapping("/{idMonitor}")
    public void update(@RequestBody Monitor entity,@PathVariable Integer idMonitor) {
        monitorService.update(entity, idMonitor);
    }
    @GetMapping("/{idMonitor}")
    public Optional<Monitor> findById(@PathVariable Integer idMonitor) {
        return monitorService.findById(idMonitor);
    }
    @DeleteMapping("/{idMonitor}")
    public void deleteById(@PathVariable Integer idMonitor) {
        monitorService.deleteById(idMonitor);
    }
}
