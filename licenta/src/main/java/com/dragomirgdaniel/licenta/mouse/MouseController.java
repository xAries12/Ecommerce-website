package com.dragomirgdaniel.licenta.mouse;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/products/mouses")
@RestController
public class MouseController {
    private final MouseService mouseService;

    public MouseController(MouseService mouseService) {
        this.mouseService = mouseService;
    }
    @GetMapping
    public List<Mouse> findAll() {
        return mouseService.findAll();
    }
    @PostMapping
    public <S extends Mouse> S save(@RequestBody S entity) {
        return mouseService.save(entity);
    }
    @PutMapping("/{idMouse}")
    public void update(@RequestBody Mouse entity,@PathVariable Integer idMouse) {
        mouseService.update(entity,idMouse);
    }
    @GetMapping("/{idMouse}")
    public Optional<Mouse> findById(@PathVariable Integer idMouse) {
        return mouseService.findById(idMouse);
    }
    @DeleteMapping("/{idMouse}")
    public void deleteById(@PathVariable Integer idMouse) {
        mouseService.deleteById(idMouse);
    }
}
