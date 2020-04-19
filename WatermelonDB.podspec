Pod::Spec.new do |s|
  # NPM package specification
  package = JSON.parse(File.read(File.join(File.dirname(__FILE__), "package.json")))
  
  s.name         = "WatermelonDB"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = "https://github.com/Nozbe/WatermelonDB"
  s.license      = "MIT"
  s.author       = { package["author"]["name"] => package["author"]["email"] } 
  s.source       = { :git => "https://github.com/dm-Mobile-SE-Developer/WatermelonDB.git" }

  s.source_files = "native/ios/**/*.{swift,h,m}"
  
  s.platform     = :ios, '9.0'
  s.swift_version = '4.2'

  s.dependency "FMDB/SQLCipher", "~> 2.7"
  s.dependency "React"
end
