package com.dragomirgdaniel.licenta.ram_memory;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products/ram_memories")
public class RamMemoryController {
    private final RamMemoryService ramMemoryService;

    public RamMemoryController(RamMemoryService ramMemoryService) {
        this.ramMemoryService = ramMemoryService;
    }
    @GetMapping
    public List<RamMemory> findAll() {
        return ramMemoryService.findAll();
    }
    @PostMapping
    public <S extends RamMemory> S save(@RequestBody S entity) {
        return ramMemoryService.save(entity);
    }
    @PutMapping("/{idRamMemory}")
    public void update(@RequestBody RamMemory entity,@PathVariable Integer idRamMemory) {
        ramMemoryService.update(entity, idRamMemory);
    }
    @GetMapping("/{idRamMemory}")
    public Optional<RamMemory> findById(@PathVariable Integer idRamMemory) {
        return ramMemoryService.findById(idRamMemory);
    }
    @DeleteMapping("/{idRamMemory}")
    public void deleteById(@PathVariable Integer idRamMemory) {
        ramMemoryService.deleteById(idRamMemory);
    }
}
