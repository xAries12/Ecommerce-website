package com.dragomirgdaniel.licenta.user_log;

import com.dragomirgdaniel.licenta.account.AccountService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserLogsController {
    private final UserLogsService userLogsService;

    public UserLogsController(UserLogsService userLogsService, AccountService accountService) {
        this.userLogsService = userLogsService;
    }
    @GetMapping("/logs")
    public List<UserLogs> findAll() {
        return userLogsService.findAll();
    }
    @PostMapping("/logs")
    public <S extends UserLogs> S save(@RequestBody S entity) {
        System.out.println(entity);
        return userLogsService.save(entity);
    }
    @GetMapping(("/{idc}/logs"))
    public List<UserLogs> findByAccountIdc(@PathVariable int idc) {
        return userLogsService.findByIdc(idc);
    }
    @DeleteMapping("/logs/{idUserLogs}")
    public void deleteById(@PathVariable Integer idUserLogs) {
        userLogsService.deleteById(idUserLogs);
    }
}
