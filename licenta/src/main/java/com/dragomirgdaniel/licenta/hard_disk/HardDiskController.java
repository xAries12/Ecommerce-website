package com.dragomirgdaniel.licenta.hard_disk;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/products/hard_disks")
@RestController
public class HardDiskController {
    private final HardDiskService hardDiskService;

    public HardDiskController(HardDiskService hardDiskService) {
        this.hardDiskService = hardDiskService;
    }
    @GetMapping
    public List<HardDisk> findAll() {
        return hardDiskService.findAll();
    }
    @PostMapping
    public <S extends HardDisk> S save(@RequestBody S entity) {
        return hardDiskService.save(entity);
    }
    @PutMapping("/{idHardDisk}")
    public void update(@RequestBody HardDisk entity,@PathVariable Integer idHardDisk) {
        hardDiskService.update(entity, idHardDisk);
    }
    @GetMapping("/{idHardDisk}")
    public Optional<HardDisk> findById(@PathVariable Integer idHardDisk) {
        return hardDiskService.findById(idHardDisk);
    }
    @DeleteMapping("/{idHardDisk}")
    public void deleteById(@PathVariable Integer idHardDisk) {
        hardDiskService.deleteById(idHardDisk);
    }
}
