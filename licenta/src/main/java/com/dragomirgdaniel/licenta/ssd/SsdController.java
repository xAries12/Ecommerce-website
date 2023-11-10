package com.dragomirgdaniel.licenta.ssd;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products/ssds")
public class SsdController {
    private final SsdService ssdService;

    public SsdController(SsdService ssdService) {
        this.ssdService = ssdService;
    }
    @GetMapping
    public List<Ssd> findAll() {
        return ssdService.findAll();
    }
    @PostMapping
    public <S extends Ssd> S save(@RequestBody S entity) {
        return ssdService.save(entity);
    }
    @PutMapping("/{idSsd}")
    public void update(@RequestBody Ssd entity,@PathVariable Integer idSsd) {
        ssdService.update(entity, idSsd);
    }
    @GetMapping("/{idSsd}")
    public Optional<Ssd> findById(@PathVariable Integer idSsd) {
        return ssdService.findById(idSsd);
    }
    @DeleteMapping("/{idSsd}")
    public void deleteById(@PathVariable Integer idSsd) {
        ssdService.deleteById(idSsd);
    }
}
