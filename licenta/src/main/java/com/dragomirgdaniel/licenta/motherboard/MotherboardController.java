package com.dragomirgdaniel.licenta.motherboard;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products/motherboards")
public class MotherboardController {
    private final MotherboardService motherboardService;

    public MotherboardController(MotherboardService motherboardService) {
        this.motherboardService = motherboardService;
    }
    @GetMapping
    public List<Motherboard> findAll() {
        return motherboardService.findAll();
    }
    @PostMapping
    public <S extends Motherboard> S save(@RequestBody S entity) {
        return motherboardService.save(entity);
    }
    @PutMapping("/{idMotherboard}")
    public void update(@RequestBody Motherboard entity,@PathVariable Integer idMotherboard) {
        motherboardService.update(entity, idMotherboard);
    }
    @GetMapping("/{idMotherboard}")
    public Optional<Motherboard> findById(@PathVariable Integer idMotherboard) {
        return motherboardService.findById(idMotherboard);
    }
    @DeleteMapping("/{idMotherboard}")
    public void deleteById(@PathVariable Integer idMotherboard) {
        motherboardService.deleteById(idMotherboard);
    }
}
