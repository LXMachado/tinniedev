CREATE TABLE IF NOT EXISTS tinniedev_enquiries (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(160) NOT NULL,
  phone VARCHAR(40) DEFAULT NULL,
  business_name VARCHAR(140) DEFAULT NULL,
  website VARCHAR(240) DEFAULT NULL,
  message TEXT NOT NULL,
  source VARCHAR(120) NOT NULL DEFAULT 'website',
  user_agent VARCHAR(255) DEFAULT NULL,
  ip_address VARCHAR(45) DEFAULT NULL,
  status ENUM('new', 'read', 'replied', 'archived') NOT NULL DEFAULT 'new',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_tinniedev_enquiries_created_at (created_at),
  KEY idx_tinniedev_enquiries_status (status),
  KEY idx_tinniedev_enquiries_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
