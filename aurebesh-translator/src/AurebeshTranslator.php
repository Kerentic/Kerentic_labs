<?php

declare(strict_types=1);

namespace Kerentic\Aurebesh;

final class AurebeshTranslator
{
    public function normalize(string $text): string
    {
        return trim($text);
    }

    public function toAurebesh(string $text): string
    {
        return $this->normalize($text);
    }

    public function toLatin(string $text): string
    {
        return $this->normalize($text);
    }
}