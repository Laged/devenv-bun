{ pkgs, lib, ... }:

{
  languages.javascript = {
    enable = true;
    bun = {
      enable = true;
      install.enable = true;
    };
  };

  scripts.heartbeat.exec = ''
    bun run src/index.ts
  '';

  enterTest = ''
    bun test
  '';
}
