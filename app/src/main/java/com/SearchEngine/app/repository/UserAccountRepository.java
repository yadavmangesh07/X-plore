package com.SearchEngine.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.SearchEngine.app.entity.UserAccount;
@Repository
public interface UserAccountRepository extends JpaRepository<UserAccount, String> {
}
